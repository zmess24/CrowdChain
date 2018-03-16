pragma solidity ^0.4.17;

import './Project.sol';

contract ProjectFactory {

    // Import project contract;
    Project projectContract;

    // ProjectFactory state variables.
    Project[] public projects;
    uint32 public projectCount = 0;
    uint32 public totalContributions = 0;
    uint16 public totalBackers = 0;
    uint256 public biggestContribution = 0;
    mapping(address => bool) backers;
    mapping(uint => address) public projectToIndexOwner;
    mapping(address => uint) public ownerProjectCount;

    // ProjectFactory Events
    event ProjectCreation(string title, string description, address manager);

    function createProject(string _title, string _description, string _goalDate, uint16 _goalEther) public returns (uint) {
        uint newProjectId = projects.push(new Project(_title, _description, _goalDate, _goalEther, msg.sender)) - 1;
        projectToIndexOwner[newProjectId] = msg.sender;
        ownerProjectCount[msg.sender]++;
        projectCount++;
        ProjectCreation(_title, _description, msg.sender);
        return (newProjectId);
    }

    function contributeToProject(address _projectAddress) public payable {
        projectContract = Project(_projectAddress);
        projectContract.contribute.value(msg.value)(msg.sender);
        totalContributions++;

        if (!backers[msg.sender]) {
            backers[msg.sender] = true;
            totalBackers++;
        }

        if (msg.value > biggestContribution) {
            biggestContribution = msg.value;
        }
    }

    function getSummary() public view returns (uint, uint, uint) {
        return (
            totalContributions,
            totalBackers,
            projects.length
        );
    }

    function getDeployedProjects() public view returns (Project[]) {
        return projects;
    }

}
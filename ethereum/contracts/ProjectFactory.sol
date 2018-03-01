pragma solidity ^0.4.17;

import './Project.sol';

contract ProjectFactory {

    // Import project contract;
    Project projectContract;

    // ProjectFactory state variables.
    Project[] public projects;
    uint32 public totalContributions = 0;
    uint16 public totalBackers = 0;
    mapping(address => bool) backers;
    mapping(uint => address) public projectToIndexOwner;
    mapping(address => uint) public ownerProjectCount;

    // ProjectFactory Events
    event ProjectCreation(string title, string description, address manager);

    function createProject(string _title, string _description, uint _blockDeadLine, uint16 _goalEther) public {
        uint newProjectId = projects.push(new Project(_title, _description, _blockDeadLine, _goalEther, msg.sender)) - 1;
        projectToIndexOwner[newProjectId] = msg.sender;
        ownerProjectCount[msg.sender]++;
        ProjectCreation(_title, _description, msg.sender);
    }

    function contributeToProject(address _projectAddress) public payable {
        projectContract = Project(_projectAddress);
        projectContract.contribute.value(msg.value)(msg.sender);
        totalContributions++;

        if (!backers[msg.sender]) {
            backers[msg.sender] = true;
            totalBackers++;
        }
    }

    function getSummary() public view returns (uint, uint, uint) {
        return (
            totalContributions,
            totalBackers,
            projects.length
        );
    }

}
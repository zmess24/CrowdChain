pragma solidity ^0.4.17;

/// @title Base for CrowdChain project contracts. Holds all common structs, events, and base variables.
/// @author Zac Messinger
/// @dev See README.md for more info on contract functionality.

contract Project {

    // @dev user-defined types
    enum ProjectStatus {Paused, Active, Inactive}

    // @dev Project ownership
    address public manager;

    // @dev Project metadata
    string public title;
    string public description;
    uint256 public blockCreatedAt;
    uint256 public blockDeadLine;
    uint16 public fundingGoal;
    ProjectStatus status;
    
    // @dev Project contributers
    mapping(address => bool) backers;
    uint16 public backersCount;

    // @dev Project constant variables
    uint constant MIN_CONTRIBUTION = 0.1 ether;

    // @dev Emit contribution event
    event Contribute(address sender);

    // @dev public method for instantiating an instance of a project
    // @params _title: Title of the the project
    // @params _description: Description of the project
    // @params _blockDeadLine: Target deadline for completion of fundraising.
    // @params _fundingGoal: Target goal to be raised for the project (in Wei)
    // @params _manager: Owner of the project
    function Project(string _title, string _description, uint _blockDeadLine, uint16 _fundingGoal, address _manager) public {
        require(_blockDeadLine > block.number);

        title = _title;
        description = _description;
        blockCreatedAt = block.number;
        blockDeadLine = _blockDeadLine;
        fundingGoal = _fundingGoal;
        manager = _manager;
        status = ProjectStatus.Active;
    }

    // @dev public method for contributing ether to a project
    function contribute(address _contributerAddress) public payable {
        require(msg.value >= MIN_CONTRIBUTION);

        backers[_contributerAddress] = true;
        backersCount++;
        Contribute(_contributerAddress);
    }
    
    // @dev public method that returns the   following project data:
    function getSummary() public view returns (address, string, string, uint256, uint16) {
        return (
            manager,
            title,  
            description,
            this.balance,
            backersCount
        );
    }
}
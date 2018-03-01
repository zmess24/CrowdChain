pragma solidity ^0.4.17;

contract Project {

    // Project user-defined types
    enum ProjectStatus {Paused, Active, Inactive}

    // Project ownership
    address public manager;

    // Project metadata
    string public title;
    string public description;
    uint256 public blockCreatedAt;
    uint256 public blockDeadLine;
    uint16 public goalEther;
    ProjectStatus status;
    
    // Project contributers
    mapping(address => bool) backers;
    uint16 public backersCount;

    // Project constant variables
    uint constant MIN_CONTRIBUTION = 0.1 ether;

    // Project events
    event Contribute(address sender);

    function Project(string _title, string _description, uint _blockDeadLine, uint16 _goalEther, address _manager) public {
        require(_blockDeadLine > block.number);

        title = _title;
        description = _description;
        blockCreatedAt = block.number;
        blockDeadLine = _blockDeadLine;
        goalEther = _goalEther;
        manager = _manager;
        status = ProjectStatus.Active;
    }

    function contribute(address _contributerAddress) public payable {
        require(msg.value >= MIN_CONTRIBUTION);

        backers[_contributerAddress] = true;
        backersCount++;
        Contribute(_contributerAddress);
    }
    
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
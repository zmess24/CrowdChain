pragma solidity ^ 0.4.17;

contract CrowdCoinFactory {

    /// @title Base for CrowdChain project contracts. Holds all common structs, events, and base variables.
    /// @author Zac Messinger
    /// @dev See README.md for more info on contract functionality.

    // @dev Emit contribution event
    event Contribute(address sender);
    event CreateProject(address manager, string title);

    // @dev User-defined types
    enum ProjectStatus {Paused, Active, Inactive}

    // @dev
    struct Funder {
        address addr;
        uint amount;
    }

    struct Beneficiary {
        address addr;
        uint fundingGoal;
    }

    struct Project {
        address manager;
        string title;
        string description;
        uint totalFundingGoal;
        uint numFunders;
        uint256 blockCreatedAt;
        uint256 blockDeadLine;
        uint amount;
        mapping (uint => Funder) funders;
        mapping (uint => Beneficiary) beneficiaries;
        ProjectStatus status;
    }

    Project[] public projects;
    uint32 public projectCount = 0;
    uint32 public totalContributions = 0;
    uint16 public totalBackers = 0;
    uint public highContribution;
}
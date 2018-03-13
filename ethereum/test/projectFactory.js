var ProjectFactory = artifacts.require("./ProjectFactory.sol");
var Project = artifacts.require("./ProjectFactory.sol");

let factory, project;

beforeEach(async () => {
    await ProjectFactory.deployed()
        .then(instance => {
            factory = instance;
        })
})

contract('ProjectFactory', (accounts) => {

    it('is successfully deployed', () => {
        assert.ok(factory.address);
    })

    it('has totalContributions set to 0', async() => {
        const totalContributions = await factory.totalContributions();
        assert.equal(0, totalContributions.toNumber());
    })

    it('has totalBackers set to 0', async () => {
        const totalBackers = await factory.totalBackers();
        assert.equal(0, totalBackers.toNumber());
    })

    it('can create a project and increment the projectCount by 1', async () => {
        await factory.createProject("Test Project", "Test Description", 2000000, 16, {
            from: accounts[0]
        })
        const projectCount = await factory.projectCount();
        assert.equal(1, projectCount.toNumber());
    })


    it('allows users to look up a projects owner based on the projectId', async () => {
        const project = await factory.projectToIndexOwner(0);
        assert.equal(project, accounts[0])
    })

    it('can create multiple projects', async () => {
        await factory.createProject("Test Project", "Test Description", 2000000, 16, {
            from: accounts[1]
        })
        const projectCount = await factory.projectCount();
        assert.equal(2, projectCount.toNumber());
    })

    it('can return a summary of global variables using the getSummary public function', async () => {
        const summary = await factory.getSummary.call();
        totalContributions = summary[0].toNumber();
        totalBackers = summary[1].toNumber();
        projectsLength = summary[2].toNumber();
        assert.equal(0, totalContributions);
        assert.equal(0, totalBackers);
        assert.equal(2, projectsLength);
    })

    it('allows users to make a contribution to a project', async () => {
        const projectAddress = await factory.projects.call(0);
        await factory.contributeToProject(projectAddress, {
            value: web3.toWei(1, "ether"),
            from: accounts[0]
        })

        let totalBackers = await factory.totalBackers.call();
        let totalContributions = await factory.totalContributions.call();
        let biggestContribution = await factory.biggestContribution.call();
        totalBackers = totalBackers.toNumber();
        totalContributions = totalContributions.toNumber();
        biggestContribution = web3.fromWei(biggestContribution.toNumber(), "ether");
        assert.equal(1, totalBackers);
        assert.equal(1, totalContributions);
        assert.equal(1, biggestContribution);
    })

    it('increases the totalContributions state variable, but not increase the totalBackers if the same account contributes more than once', async () => {
        const projectAddress = await factory.projects.call(0);
        await factory.contributeToProject(projectAddress, {
            value: web3.toWei(2, "ether"),
            from: accounts[0]
        })

        let totalBackers = await factory.totalBackers.call();
        let totalContributions = await factory.totalContributions.call();
        let biggestContribution = await factory.biggestContribution.call();
        totalBackers = totalBackers.toNumber();
        totalContributions = totalContributions.toNumber();
        biggestContribution = web3.fromWei(biggestContribution.toNumber(), "ether");
        assert.equal(1, totalBackers);
        assert.equal(2, totalContributions);
        assert.equal(2, biggestContribution)
    })

    it('increases the projectToOwnerCount state variable upon project creation', async () => {
        const ownerProjectCount = await factory.ownerProjectCount(accounts[0])
            .then(result => result.toNumber());

        assert.equal(1, ownerProjectCount);

        await factory.createProject("Test Project", "Test Description", 2000000, 16, {
            from: accounts[0]
        })

        const newOwnerProjectCount = await factory.ownerProjectCount(accounts[0])
            .then(result => result.toNumber());

        assert.equal(2, newOwnerProjectCount);
    })

})

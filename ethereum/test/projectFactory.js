var ProjectFactory = artifacts.require("./ProjectFactory.sol");

let factory;

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
        await factory.createProject("Test Project", "Test Description", 2000000, 16)
        const projectCount = await factory.projectCount();
        assert.equal(1, projectCount.toNumber());
    })

    console.log()

    // it('adds to projectCount after adding a', async () => {
    //     await factory.createProject("Test Project", "Test Description", 2000000, 16);
    //     const projectCount = await factory.projectCount();
    //     assert.equal(1, projectCount.toNumber());
    // })

})
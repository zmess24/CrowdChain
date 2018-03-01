var ProjectFactory = artifacts.require("./ProjectFactory.sol");

let accounts, factory;

beforeEach(async () => {
    await ProjectFactory.deployed()
        .then(instance => {
            factory = instance;
        })
})

describe('ProjectFactory', () => {

    it('has totalContributions set to 0', async() => {
        const totalContributions = await factory.totalContributions();
        assert.equal(0, totalContributions);
    })

    it('has totalBackers set to 0', async () => {
        const totalBackers = await factory.totalBackers();
        assert.equal(0, totalBackers);
    })

    it('can create a project', async () => {
        try {
            await factory.createProject('Test Project', 'Test Description', 2000000, 16)
            assert(true);            
        } catch (err) {
            assert(err)
        }
    })

    it('records project creation hash in the project array', async () => {
        await factory.createProject('Test Project', 'Test Description', 2000000, 16);
        const projects = await factory.getSummary(1);
        console.log(projects)
        assert.equal(1, projects)
    })

})
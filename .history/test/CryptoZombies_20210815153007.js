const ZombieCore = artifacts.require("ZombieCore");
const zombieNames = ["Zombie 1", "Zombie 2"];
contract("ZombieCore", (accounts) => {
    let [alice, bob] = accounts;
    let contractInstance;
    beforeEach(async () => {
        // let's put here the code that creates a new contract instance
        contractInstance = await ZombieCore.new();
    });

    it("should be able to create a new zombie", async () => {
        // const contractInstance = await ZombieCore.new();
        // start here
        const result = await contractInstance.createZombie(zombieNames[0],{from: alice});
        assert.equal(result.receipt.status,true);
        assert.equal(result.receipt.logs[0].args.name,zombieNames[0]);
    })

    context("with the single-step transfer scenario", async () => {
        it("should transfer a zombie", async () => {
          // start here.
        })
    })

    it("zombies should be able to attack another zombie", async () => {
        let result;
        result = await contractInstance.createZombie(zombieNames[0], {from: alice});
        const firstZombieId = result.logs[0].args.zombieId.toNumber();
        result = await contractInstance.createZombie(zombieNames[1], {from: bob});
        const secondZombieId = result.logs[0].args.zombieId.toNumber();
        //TODO: increase the time
        await contractInstance.attack(firstZombieId, secondZombieId, {from: alice});
        assert.equal(result.receipt.status, true);
    })
})

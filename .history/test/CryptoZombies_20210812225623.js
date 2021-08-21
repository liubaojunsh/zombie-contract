const ZombieCore = artifacts.require("ZombieCore");
const zombieNames = ["Zombie 1", "Zombie 2"];
contract("ZombieCore", (accounts) => {
    let [alice, bob] = accounts;
    it("should be able to create a new zombie", async () => {
        const contractInstance = await ZombieCore.new();
        // start here
        const result = await contractInstance.createRandomZombie(zombieNames[0],{from: alice});
        asset.equal(result.receipt.status,true);
        asset.equal(result.logs[0].args.name,zombieNames[0]);
    })
})

const { expect } = require("chai");

describe("Greeter", function () {
  let contract;

  beforeEach(async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    contract = await Greeter.deploy();
  });

  it("Should return the new greeting once it's changed", async function () {
    expect(await contract.greet()).to.equal("Hello, SmartNinja!");

    await contract.setGreeting("Hola, mundo!");

    expect(await contract.greet()).to.equal("Hola, mundo!");
  });
});

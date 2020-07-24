import connect from "../src/connect"
import disconnect from "../src/disconnect"
import { currentClient, currentDb } from "../src/connectionStatus"

describe("connect()", () => {
  afterEach(async () => {
    await disconnect()
  })

  it("connects to a database", async () => {
    await connect(process.env.MONGO_URL!)

    expect(currentClient()).toBeTruthy()
  })
})

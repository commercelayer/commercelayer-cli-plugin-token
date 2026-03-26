import { runCommand } from '@oclif/test'
import { expect } from 'chai'


describe('token:revoke', () => {
  it('runs NoC', async () => {
    const { stdout } = await runCommand<{ name: string }>(['token:noc'])
    expect(stdout).to.contain('-= NoC =-')
  }).timeout(5000)
})

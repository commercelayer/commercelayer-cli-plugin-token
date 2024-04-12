import { expect, test } from '@oclif/test'

describe('token:get', () => {
  test
    .timeout(5000)
    .stdout()
    .command(['token:noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })

})
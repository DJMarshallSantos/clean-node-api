import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

describe('Bcrypt Adapter', () => {
  test('Should Bcrypt with correct value', async () => {
    const salt = 12
    const sut = new BcryptAdapter(salt)
    jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(bcrypt.hash).toHaveBeenCalledWith('any_value', salt)
  })
})

const userSchema = {
  name: '',
  email: '',
  password: '',
  address: {
    cep: '',
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    state: ''
  },
  cart: []
};

export default userSchema;
export default class DataBase {
    #storage = {
        users: [],
        emails: []
    }


    find(key) {
        return this.#storage[key]
    }
    saveEmails(email) {
        this.#storage.emails.push(email)
    }
    saveUsers(user) {
        this.#storage.users.push(user)
    }
    showUser() {
        return this.#storage.users
    }
}
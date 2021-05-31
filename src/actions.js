//action creator
export function addContact(newPerson) {
    return {
        type: 'ADD_CONTACT',
        data: newPerson
    }
}
//action creator
export function addContact(newPerson) {
    return {
        type: 'ADD_CONTACT',
        data: newPerson
    }
}

export function toggleModal(toggle) {
    return {
        type: 'TOGGLE_MODAL',
        data: toggle
    }
}
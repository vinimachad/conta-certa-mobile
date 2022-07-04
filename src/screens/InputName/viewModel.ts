export class ViewModel {

    nameFieldValidation(name: string, completion: (isActive: boolean) => void) {
        if (name.length >= 4) {
            completion(true)
        } else {
            completion(false)
        }
    }
}
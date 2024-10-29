import Foundation

struct User: Codable, Identifiable {
    let id: String
    let firstName: String
    let lastName: String
    let dateOfBirth: String
    let phoneNumber: String
    var email: String?
    
    var fullName: String {
        return "\(firstName) \(lastName)"
    }
    
    init(firstName: String, lastName: String, dateOfBirth: String, phoneNumber: String, email: String? = nil) {
        self.id = UUID().uuidString // Generate a unique ID
        self.firstName = firstName
        self.lastName = lastName
        self.dateOfBirth = dateOfBirth
        self.phoneNumber = phoneNumber
        self.email = email
    }
}

// MARK: - Authentication Response
struct AuthResponse: Codable {
    let user: User
    let token: String
}

// MARK: - User Settings
struct UserSettings: Codable {
    var pushNotifications: Bool
    var emailNotifications: Bool
    var biometricLogin: Bool
    var darkMode: Bool
    
    static let `default` = UserSettings(
        pushNotifications: true,
        emailNotifications: true,
        biometricLogin: false,
        darkMode: false
    )
}
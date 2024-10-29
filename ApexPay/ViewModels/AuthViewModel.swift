import Foundation
import Combine

class AuthViewModel: ObservableObject {
    @Published var isAuthenticated = false
    @Published var currentUser: User?
    @Published var errorMessage: String?
    
    func login(phoneNumber: String, password: String) async throws {
        // Simulate API call
        try await Task.sleep(nanoseconds: 1_000_000_000)
        
        let mockUser = User(
            firstName: "John",
            lastName: "Doe",
            dateOfBirth: "1990-01-01",
            phoneNumber: phoneNumber
        )
        
        DispatchQueue.main.async {
            self.currentUser = mockUser
            self.isAuthenticated = true
        }
    }
    
    func signUp(user: User) async throws {
        // Simulate API call
        try await Task.sleep(nanoseconds: 1_000_000_000)
        
        DispatchQueue.main.async {
            self.currentUser = user
            self.isAuthenticated = true
        }
    }
    
    func logout() {
        currentUser = nil
        isAuthenticated = false
    }
}
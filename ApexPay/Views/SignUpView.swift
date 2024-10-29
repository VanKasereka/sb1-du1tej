import SwiftUI

struct SignUpView: View {
    @StateObject private var viewModel = SignUpViewModel()
    @Environment(\.dismiss) private var dismiss
    
    var body: some View {
        ScrollView {
            VStack(spacing: 24) {
                // Header
                Text("Create Account")
                    .font(.title)
                    .fontWeight(.bold)
                    .foregroundColor(AppColors.textPrimary)
                    .padding(.top, 40)
                
                // Form Fields
                VStack(spacing: 16) {
                    CustomTextField(
                        text: $viewModel.firstName,
                        placeholder: "First Name",
                        icon: "person.fill"
                    )
                    
                    CustomTextField(
                        text: $viewModel.lastName,
                        placeholder: "Last Name",
                        icon: "person.fill"
                    )
                    
                    CustomTextField(
                        text: $viewModel.phoneNumber,
                        placeholder: "Phone Number",
                        icon: "phone.fill",
                        keyboardType: .phonePad
                    )
                    
                    DatePicker(
                        "Date of Birth",
                        selection: $viewModel.dateOfBirth,
                        displayedComponents: .date
                    )
                    .accentColor(AppColors.accent)
                    
                    SecureField("Password", text: $viewModel.password)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                    
                    SecureField("Confirm Password", text: $viewModel.confirmPassword)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                }
                .padding(.horizontal)
                
                // Sign Up Button
                Button(action: { Task { await viewModel.signUp() } }) {
                    if viewModel.isLoading {
                        ProgressView()
                            .progressViewStyle(CircularProgressViewStyle(tint: .white))
                    } else {
                        Text("Create Account")
                            .font(.headline)
                    }
                }
                .frame(maxWidth: .infinity)
                .padding()
                .background(AppColors.primaryGradient)
                .foregroundColor(.white)
                .clipShape(Capsule())
                .padding(.horizontal)
                .disabled(viewModel.isLoading)
                
                if let error = viewModel.error {
                    Text(error)
                        .foregroundColor(AppColors.error)
                        .font(.caption)
                }
                
                // Terms and Privacy
                Text("By signing up, you agree to our Terms of Service and Privacy Policy")
                    .font(.caption)
                    .foregroundColor(AppColors.textSecondary)
                    .multilineTextAlignment(.center)
                    .padding(.horizontal)
                
                // Login Link
                HStack {
                    Text("Already have an account?")
                        .foregroundColor(AppColors.textSecondary)
                    
                    NavigationLink("Log in", destination: LoginView())
                        .foregroundColor(AppColors.accent)
                }
                .font(.subheadline)
                .padding(.top)
            }
            .padding(.bottom, 40)
        }
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct CustomTextField: View {
    @Binding var text: String
    let placeholder: String
    let icon: String
    var keyboardType: UIKeyboardType = .default
    
    var body: some View {
        HStack {
            Image(systemName: icon)
                .foregroundColor(AppColors.textSecondary)
                .frame(width: 24)
            
            TextField(placeholder, text: $text)
                .keyboardType(keyboardType)
        }
        .padding()
        .background(AppColors.backgroundSecondary)
        .cornerRadius(10)
    }
}

class SignUpViewModel: ObservableObject {
    @Published var firstName = ""
    @Published var lastName = ""
    @Published var phoneNumber = ""
    @Published var dateOfBirth = Date()
    @Published var password = ""
    @Published var confirmPassword = ""
    @Published var isLoading = false
    @Published var error: String?
    
    func signUp() async {
        guard validateFields() else { return }
        
        isLoading = true
        error = nil
        
        do {
            // Simulate API call
            try await Task.sleep(nanoseconds: 1_000_000_000)
            
            let dateFormatter = DateFormatter()
            dateFormatter.dateFormat = "yyyy-MM-dd"
            
            let user = User(
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dateFormatter.string(from: dateOfBirth),
                phoneNumber: phoneNumber
            )
            
            // Here you would typically make an API call to create the user
            
            DispatchQueue.main.async {
                self.isLoading = false
                // Handle successful signup
            }
        } catch {
            DispatchQueue.main.async {
                self.isLoading = false
                self.error = error.localizedDescription
            }
        }
    }
    
    private func validateFields() -> Bool {
        if firstName.isEmpty || lastName.isEmpty || phoneNumber.isEmpty {
            error = "Please fill in all fields"
            return false
        }
        
        if password.count < 6 {
            error = "Password must be at least 6 characters"
            return false
        }
        
        if password != confirmPassword {
            error = "Passwords do not match"
            return false
        }
        
        return true
    }
}

struct SignUpView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            SignUpView()
        }
    }
}
import SwiftUI

struct LoginView: View {
    @StateObject private var viewModel = LoginViewModel()
    @Environment(\.dismiss) private var dismiss
    
    var body: some View {
        VStack(spacing: 20) {
            Text("Sign in to your account")
                .font(.title)
                .fontWeight(.bold)
            
            VStack(spacing: 15) {
                TextField("Phone Number", text: $viewModel.phoneNumber)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                    .keyboardType(.phonePad)
                
                SecureField("Password", text: $viewModel.password)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
            }
            .padding(.vertical)
            
            Button(action: { Task { await viewModel.login() } }) {
                Text("Sign in")
                    .frame(maxWidth: .infinity)
                    .padding()
                    .background(Color.black)
                    .foregroundColor(.white)
                    .clipShape(Capsule())
            }
            .disabled(viewModel.isLoading)
            
            if viewModel.isLoading {
                ProgressView()
            }
            
            if let error = viewModel.error {
                Text(error)
                    .foregroundColor(.red)
            }
            
            NavigationLink("Don't have an account? Sign Up", destination: SignUpView())
                .foregroundColor(.blue)
        }
        .padding()
        .navigationTitle("Login")
    }
}

class LoginViewModel: ObservableObject {
    @Published var phoneNumber = ""
    @Published var password = ""
    @Published var isLoading = false
    @Published var error: String?
    
    func login() async {
        isLoading = true
        error = nil
        
        do {
            // Add your login logic here
            try await Task.sleep(nanoseconds: 1_000_000_000)
            
            DispatchQueue.main.async {
                self.isLoading = false
                // Handle successful login
            }
        } catch {
            DispatchQueue.main.async {
                self.isLoading = false
                self.error = error.localizedDescription
            }
        }
    }
}
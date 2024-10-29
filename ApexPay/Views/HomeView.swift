import SwiftUI

struct HomeView: View {
    @State private var isAnimating = false
    
    var body: some View {
        NavigationView {
            ZStack {
                // Animated background
                GeometryReader { geometry in
                    ZStack {
                        AppColors.primaryGradient
                            .ignoresSafeArea()
                        
                        // Animated circles in background
                        Circle()
                            .fill(AppColors.accent.opacity(0.1))
                            .frame(width: 200)
                            .offset(x: isAnimating ? geometry.size.width * 0.3 : -geometry.size.width * 0.3,
                                    y: isAnimating ? geometry.size.height * 0.2 : geometry.size.height * 0.1)
                            .blur(radius: 50)
                        
                        Circle()
                            .fill(AppColors.primaryLight.opacity(0.1))
                            .frame(width: 300)
                            .offset(x: isAnimating ? -geometry.size.width * 0.2 : geometry.size.width * 0.2,
                                    y: isAnimating ? geometry.size.height * 0.3 : geometry.size.height * 0.4)
                            .blur(radius: 60)
                    }
                    .animation(.easeInOut(duration: 7).repeatForever(autoreverses: true), value: isAnimating)
                }
                
                ScrollView {
                    VStack(spacing: 40) {
                        // Logo and Brand
                        VStack(spacing: 16) {
                            HStack(spacing: 12) {
                                Image(systemName: "bolt.circle.fill")
                                    .font(.system(size: 44, weight: .medium))
                                    .foregroundColor(AppColors.accent)
                                    .rotationEffect(.degrees(isAnimating ? 360 : 0))
                                    .animation(.easeInOut(duration: 20).repeatForever(autoreverses: false), value: isAnimating)
                                
                                Text("ApexPay")
                                    .font(.system(size: 40, weight: .bold))
                                    .foregroundColor(.white)
                            }
                            .padding(.top, 60)
                            
                            Text("The Future of Money Transfer")
                                .font(.title3)
                                .foregroundColor(AppColors.accentLight)
                                .opacity(0.9)
                        }
                        .opacity(isAnimating ? 1 : 0)
                        .offset(y: isAnimating ? 0 : 20)
                        
                        // Features Section
                        VStack(spacing: 24) {
                            FeatureCard(
                                icon: "arrow.left.arrow.right.circle.fill",
                                title: "Instant Transfers",
                                description: "Send and receive money instantly across multiple currencies with zero fees"
                            )
                            
                            FeatureCard(
                                icon: "globe.americas.fill",
                                title: "Global Reach",
                                description: "Transfer money to over 100 countries with competitive exchange rates"
                            )
                            
                            FeatureCard(
                                icon: "lock.shield.fill",
                                title: "Bank-Grade Security",
                                description: "Your money is protected with state-of-the-art encryption and security measures"
                            )
                        }
                        .padding(.horizontal)
                        .opacity(isAnimating ? 1 : 0)
                        .offset(y: isAnimating ? 0 : 40)
                        
                        // Action Buttons
                        VStack(spacing: 16) {
                            NavigationLink(destination: SignUpView()) {
                                GradientButton(title: "Get Started") {}
                                    .padding(.horizontal, 24)
                            }
                            
                            NavigationLink(destination: LoginView()) {
                                Text("Already have an account? Log in")
                                    .font(.subheadline)
                                    .foregroundColor(AppColors.accentLight)
                                    .padding(.vertical, 8)
                            }
                        }
                        .padding(.horizontal, 24)
                        .padding(.bottom, 40)
                        .opacity(isAnimating ? 1 : 0)
                        .offset(y: isAnimating ? 0 : 60)
                    }
                }
            }
            .navigationBarHidden(true)
            .onAppear {
                withAnimation(.easeOut(duration: 1.2)) {
                    isAnimating = true
                }
            }
        }
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}
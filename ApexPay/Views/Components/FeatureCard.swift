import SwiftUI

struct FeatureCard: View {
    let icon: String
    let title: String
    let description: String
    @State private var isAnimating = false
    
    var body: some View {
        HStack(alignment: .top, spacing: 16) {
            Image(systemName: icon)
                .font(.system(size: 32, weight: .medium))
                .foregroundColor(AppColors.accent)
                .frame(width: 40)
                .rotationEffect(.degrees(isAnimating ? 360 : 0))
                .animation(.easeInOut(duration: 1).repeatForever(autoreverses: false), value: isAnimating)
            
            VStack(alignment: .leading, spacing: 8) {
                Text(title)
                    .font(.title3)
                    .fontWeight(.bold)
                    .foregroundColor(.white)
                
                Text(description)
                    .font(.subheadline)
                    .foregroundColor(AppColors.accentLight)
                    .fixedSize(horizontal: false, vertical: true)
                    .opacity(0.9)
            }
        }
        .padding(20)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(AppColors.surface.opacity(0.15))
                .overlay(
                    RoundedRectangle(cornerRadius: 20)
                        .stroke(
                            LinearGradient(
                                colors: [AppColors.accent.opacity(0.6), AppColors.accent.opacity(0.2)],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ),
                            lineWidth: 1
                        )
                )
        )
        .shadow(color: AppColors.accent.opacity(0.1), radius: 15, x: 0, y: 10)
        .onAppear {
            withAnimation {
                isAnimating = true
            }
        }
    }
}
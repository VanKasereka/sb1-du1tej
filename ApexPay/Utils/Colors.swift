import SwiftUI

struct AppColors {
    // Primary Brand Colors
    static let primary = Color("Primary") // Deep electric blue (#0066FF)
    static let primaryLight = Color("PrimaryLight") // Lighter blue for hover states (#4D94FF)
    static let primaryDark = Color("PrimaryDark") // Darker blue for pressed states (#0047B3)
    
    // Accent Colors
    static let accent = Color("Accent") // Vibrant emerald (#00D6A1)
    static let accentLight = Color("AccentLight") // Light mint (#7FFFD4)
    static let accentDark = Color("AccentDark") // Deep emerald (#00A67B)
    
    // Background Colors
    static let background = Color("Background") // Pure white in light mode, rich dark in dark mode (#FFFFFF / #121212)
    static let backgroundSecondary = Color("BackgroundSecondary") // Subtle gray (#F8F9FA / #2D2D2D)
    static let backgroundTertiary = Color("BackgroundTertiary") // Card background (#FFFFFF / #1E1E1E)
    
    // Surface Colors
    static let surface = Color("Surface") // Elevated surface color (#FFFFFF / #242424)
    static let surfaceHover = Color("SurfaceHover") // Surface hover state (#F5F5F5 / #2A2A2A)
    static let surfacePressed = Color("SurfacePressed") // Surface pressed state (#EEEEEE / #333333)
    
    // Text Colors
    static let textPrimary = Color("TextPrimary") // Primary text (#1A1A1A / #FFFFFF)
    static let textSecondary = Color("TextSecondary") // Secondary text (#6E7179 / #A0A0A0)
    static let textTertiary = Color("TextTertiary") // Subtle text (#9095A0 / #808080)
    
    // Status Colors
    static let success = Color("Success") // Success green (#00C853)
    static let warning = Color("Warning") // Warning orange (#FF9500)
    static let error = Color("Error") // Error red (#FF3B30)
    static let info = Color("Info") // Info blue (#0A84FF)
    
    // Transaction Colors
    static let sent = Color("Sent") // Outgoing transaction (#FF3B30)
    static let received = Color("Received") // Incoming transaction (#00C853)
    static let pending = Color("Pending") // Pending transaction (#FF9500)
    
    // Gradient Colors
    static let gradientStart = Color("GradientStart") // Gradient start (#0066FF)
    static let gradientMiddle = Color("GradientMiddle") // Gradient middle (#00D6A1)
    static let gradientEnd = Color("GradientEnd") // Gradient end (#7FFFD4)
    
    // Card Colors
    static let cardPrimary = Color("CardPrimary") // Premium card color (#1A1A1A)
    static let cardSecondary = Color("CardSecondary") // Standard card color (#333333)
    static let cardHighlight = Color("CardHighlight") // Card accent (#00D6A1)
    
    // Chart Colors
    static let chartPrimary = Color("ChartPrimary") // Primary chart color (#0066FF)
    static let chartSecondary = Color("ChartSecondary") // Secondary chart color (#00D6A1)
    static let chartTertiary = Color("ChartTertiary") // Tertiary chart color (#FF9500)
    static let chartBackground = Color("ChartBackground") // Chart background (#F8F9FA / #2D2D2D)
    
    // Semantic Gradients
    static let primaryGradient = LinearGradient(
        gradient: Gradient(colors: [gradientStart, gradientMiddle]),
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )
    
    static let accentGradient = LinearGradient(
        gradient: Gradient(colors: [gradientMiddle, gradientEnd]),
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )
    
    static let cardGradient = LinearGradient(
        gradient: Gradient(colors: [cardPrimary, cardSecondary]),
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )
}

// Extension to support dynamic color schemes
extension Color {
    static func adaptiveColor(light: String, dark: String) -> Color {
        Color(UIColor { traitCollection in
            return traitCollection.userInterfaceStyle == .dark ? UIColor(named: dark)! : UIColor(named: light)!
        })
    }
}
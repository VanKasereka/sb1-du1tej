import SwiftUI

enum AppIcon {
    static let logo = "AppLogo"
    static let transfer = "TransferIcon"
    static let global = "GlobalIcon"
    static let security = "SecurityIcon"
    
    // System icons (SF Symbols)
    static let defaultLogo = "bolt.circle.fill"
    static let defaultTransfer = "arrow.left.arrow.right.circle.fill"
    static let defaultGlobal = "globe.americas.fill"
    static let defaultSecurity = "lock.shield.fill"
}

extension Image {
    static func appIcon(_ name: String) -> Image {
        Image(name, bundle: .main)
    }
    
    static func sfIcon(_ name: String) -> Image {
        Image(systemName: name)
    }
}
import SwiftUI

struct TransactionListView: View {
    @StateObject var viewModel = TransactionViewModel()
    
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Recent Transactions")
                .font(.headline)
                .foregroundColor(.secondary)
            
            ForEach(viewModel.transactions.prefix(5)) { transaction in
                TransactionRow(transaction: transaction)
            }
            
            Button("View all transactions") {
                // Handle view all action
            }
            .foregroundColor(.blue)
            .font(.subheadline)
        }
    }
}

struct TransactionRow: View {
    let transaction: Transaction
    
    var body: some View {
        HStack {
            Circle()
                .fill(transaction.type == .received ? Color.green.opacity(0.2) : Color.red.opacity(0.2))
                .frame(width: 40, height: 40)
                .overlay(
                    Image(systemName: transaction.type == .received ? "arrow.down.left" : "arrow.up.right")
                        .foregroundColor(transaction.type == .received ? .green : .red)
                )
            
            VStack(alignment: .leading) {
                Text(transaction.name)
                    .font(.headline)
                Text(transaction.date)
                    .font(.caption)
                    .foregroundColor(.secondary)
            }
            
            Spacer()
            
            Text(transaction.amount.formatted(.currency(code: "USD")))
                .fontWeight(.semibold)
                .foregroundColor(transaction.type == .received ? .green : .red)
        }
        .padding()
        .background(Color(.systemBackground))
        .cornerRadius(10)
        .shadow(radius: 2)
    }
}
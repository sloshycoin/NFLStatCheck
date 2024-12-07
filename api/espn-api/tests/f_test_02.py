from espn_api.endpoints import Transactions

transactions_api = Transactions()
transactions = transactions_api.get_transactions()

print(transactions)

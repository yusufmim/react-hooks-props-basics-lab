from customer import Customer
from coffee import Coffee
from order import Order

alice = Customer("Alice")
bob = Customer("Bob")

latte = Coffee("Latte")
mocha = Coffee("Mocha")

alice.create_order(latte, 3.5)
alice.create_order(mocha, 4.0)
bob.create_order(latte, 5.0)

print(f"Alice's coffees: {[c.name for c in alice.coffees()]}")
print(f"Latte orders: {latte.num_orders()}")
print(f"Latte avg price: {latte.average_price():.2f}")
print(f"Top spender on Latte: {Customer.most_aficionado(latte).name}")
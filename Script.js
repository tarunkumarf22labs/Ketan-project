const input = document.querySelector("input");
const button = document.querySelector("button");
const found = document.querySelector(".found");
const totalvalue = document.querySelector(".totalvalue");
const shower = document.querySelector(".shower");
const discountvalue = document.querySelector(".discountvalue");
const taxedvalue = document.querySelector(".taxedvalue");
const pluck = document.querySelector(".deliver");
const textshower = document.querySelector(".text-shower");
const obj = [
  {
    name: "socks",
    price: 12,
  },
  {
    name: "mobile",
    price: 20000,
  },
  {
    name: "Tv",
    price: 30000,
  },
  {
    name: "Laptop",
    price: 500000,
  },
  {
    name: "mobile",
    price: 21200,
  },
];

totalvalue.addEventListener("click", total);
discountvalue.addEventListener("click", () => Discount(10));
taxedvalue.addEventListener("click", () => tax(17.5));

function total() {
  let sahi = obj.reduce((acc, val) => acc + val.price, 0);
  shower.textContent = sahi;
  textshower.textContent = "Total price";
  return sahi;
}

function Discount(perc) {
  let discount = (total() * (100 - perc)) / 100;
  let discountprice = total() - Math.trunc(discount);
  shower.textContent = discountprice;
  textshower.textContent = "Discounted price";
  return discountprice;
}
function tax(taxedperc) {
  let tax = Math.trunc((total() * (100 + taxedperc)) / 100);
  shower.textContent = tax;
  textshower.textContent = "Taxed amount";
  return tax;
}

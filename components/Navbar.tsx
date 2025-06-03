import Link from 'next/link'; 

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Link href="/">
          <h1>Logo</h1>
        </Link>
      </div>
      
      <ul className="flex justify-between gap-5">
        <li><Link href="/products">Product</Link></li>
         <li><Link href="/checkout">Checkout</Link></li>
        
      </ul>

    </div>
  );
};

export default Navbar;


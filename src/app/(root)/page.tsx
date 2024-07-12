import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/src/components/RightSidebar";

const Home = () => {

  const loggedIn = {firstName: "Saurabh", lastName: "Upadhyay", email: "contact@saurabh.com"}


  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
             type="greeting"
             title= "Welcome"
             user= {loggedIn?.firstName || "Guest" }
             subtext = "Access and mange your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts = { [] }
            totalBanks = {1}
            totalCurrentBalance = {157.1}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={ [] }
        banks={ [{currentBalance: '123'},{currentBalance: '701'}] }
      />
    </section>
  )
}

export default Home;

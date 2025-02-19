import { useWallet } from "@aptos-labs/wallet-adapter-react";
// Internal Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { WalletDetails } from "@/components/WalletDetails";
import { NetworkInfo } from "@/components/NetworkInfo";
import { AccountInfo } from "@/components/AccountInfo";
import { TransferAPT } from "@/components/TransferAPT";
import { MessageBoard } from "@/components/MessageBoard";
import { TopBanner } from "@/components/TopBanner";

function App() {
  let wallet;
  try {
    wallet = useWallet();
  } catch (error) {
    console.error("Error using useWallet:", error);
    return <div className="text-red-500">Error loading wallet. Please try again.</div>;
  }

  const { connected } = wallet;

  return (
    <>
      <TopBanner />
      <Header />
      <div className="flex items-center justify-center flex-col">
        <Card>
          {connected ? (
            <CardContent className="flex flex-col gap-10 pt-6">

              <WalletDetails />
              <NetworkInfo />
              <AccountInfo />
              {/* <TransferAPT /> */}
              {/* <MessageBoard /> */}
            </CardContent>
          ) : (
            <CardHeader>
              <CardTitle>To get started, connect a wallet</CardTitle>
            </CardHeader>
          )}
        </Card>
      </div>
    </>
  );
}

export default App;

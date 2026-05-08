/**
 * Cryptocurrency payment button using NOWPayments
 * Supports XRP and 200+ other cryptocurrencies
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { Loader2 } from "lucide-react";

interface CryptoPaymentButtonProps {
  amount: number;
  description: string;
  buttonText?: string;
}

export function CryptoPaymentButton({
  amount,
  description,
  buttonText = "Pay with Cryptocurrency",
}: CryptoPaymentButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("XRP");
  const [isProcessing, setIsProcessing] = useState(false);

  const { data: currenciesData } = trpc.crypto.currencies.useQuery();
  const { data: estimateData } = trpc.crypto.estimate.useQuery(
    {
      amount,
      currencyFrom: "USD",
      currencyTo: selectedCurrency,
    },
    { enabled: isOpen && !!selectedCurrency }
  );

  const createPayment = trpc.crypto.createPayment.useMutation();

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const result = await createPayment.mutateAsync({
        price_amount: amount,
        price_currency: "USD",
        pay_currency: selectedCurrency,
        order_description: description,
      });

      if (result.success && result.payment) {
        // Redirect to NOWPayments payment page
        window.location.href = result.payment.payment_url;
      } else {
        toast.error(result.error || "Failed to create payment");
        setIsProcessing(false);
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Failed to create payment. Please try again.");
      setIsProcessing(false);
    }
  };

  // Popular cryptocurrencies to show first
  const popularCurrencies = ["XRP", "BTC", "ETH", "USDT", "LTC"];
  const availableCurrencies = currenciesData?.currencies || popularCurrencies;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Pay with Cryptocurrency</DialogTitle>
          <DialogDescription>
            Select your preferred cryptocurrency. We accept XRP, Bitcoin, Ethereum, and 200+ other coins.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="currency">Select Cryptocurrency</Label>
            <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
              <SelectTrigger id="currency">
                <SelectValue placeholder="Choose cryptocurrency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="XRP">XRP (Ripple)</SelectItem>
                <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                <SelectItem value="USDT">Tether (USDT)</SelectItem>
                <SelectItem value="LTC">Litecoin (LTC)</SelectItem>
                <SelectItem value="USDC">USD Coin (USDC)</SelectItem>
                <SelectItem value="BNB">Binance Coin (BNB)</SelectItem>
                <SelectItem value="ADA">Cardano (ADA)</SelectItem>
                <SelectItem value="DOGE">Dogecoin (DOGE)</SelectItem>
                <SelectItem value="TRX">TRON (TRX)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="bg-secondary/50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Amount (USD):</span>
              <span className="font-medium">${amount.toFixed(2)}</span>
            </div>
            {estimateData?.success && estimateData.estimate && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Estimated {selectedCurrency}:</span>
                <span className="font-medium">
                  {estimateData.estimate.estimated_amount} {selectedCurrency}
                </span>
              </div>
            )}
            <p className="text-xs text-muted-foreground pt-2">
              Final amount will be calculated at checkout based on current exchange rates.
            </p>
          </div>

          <Button
            onClick={handlePayment}
            disabled={isProcessing || !selectedCurrency}
            className="w-full"
            size="lg"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              `Continue to Payment`
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Powered by NOWPayments • Secure cryptocurrency processing
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

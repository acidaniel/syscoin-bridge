import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Link,
  Typography,
} from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";

interface IFAQ {
  question: string;
  answer: React.ReactNode | string;
}
const faqs: IFAQ[] = [
  {
    question: "What is Syscoin?",
    answer: (
      <Typography>
        Syscoin is a decentralized blockchain that offers Bitcoin security with
        a UTXO-based token platform aswell as an EVM tied to the main Syscoin
        ledger through Proof-Of-Work consensus which is merge-mmined with
        Bitcoin. You can think of it as Bitcoin and Ethereum combined into one
        system. Expressivness of the EVM powered by the security of Bitcoin we
        combine both gold standards into one. Our vision to scale computation is
        through zero-knowledge proofs, you can read more about our design here:
        A Design For An Efficient Coordinated Financial Computing Platform.
      </Typography>
    ),
  },
  {
    question: "What is an SPT?",
    answer:
      "Syscoin Platform Tokens (SPT) are cryptocurrency tokens that can be created quickly and easily on Syscoin Platform by anyone. This can be done using Sysmint or Syscoin QT using command-line.",
  },
  {
    question: "What is SYSX",
    answer:
      "SYSX is both an SPT and NEVM ERC20 token, backed by SYS at 1:1 ratio. You can burn your SYS and mint SYSX on the Syscoin chain, allowing you to utilize high throughput ZDAG transactions. You can then burn your SYSX (SPT) and mint a SYSX (ERC20) token, allowing you to utilize all the functionalities of the NEVM Chain, such as Smart Contracts. This mint/burn process can also be done in reverse order; it works in both directions.",
  },
  {
    question: "How does the SYSX bridge work?",
    answer: `The basic structure of how SYS bridge works is SYS <-> SYSX (SPT) <-> SYSX (ERC20).

    You will need to burn your SYS for SYSX (SPT). You can then move your SYSX (SPT) across the bridge, which will then be minted as either an ERC20 or base coin if you moved SYSX.
    
    The total supply of SYS remains the same.`,
  },
  {
    question: "Does the NEVM run on Ethereum?",
    answer:
      "The NEVM will run on an Ethereum version that is integrated into Syscoin that leverages PoW of Bitcoin to secure its chain. NEVM stands for Network-enhanced Ethereum Virtual Machine.",
  },
  {
    question: "Will SPTs be transferable to NEVM?",
    answer:
      "Any Syscoin SPT can be transferred to the NEVM layer, and back, as needed. It is a trustless and decentralized process.",
  },
  {
    question: "Will this mean I can use Ledger, Myetherwallet, Metamask etc?",
    answer:
      "Your SPT will become compatible with all the major service providers using EVM once moved across the bridge.",
  },
  {
    question: "Syscoin supply will remain the same?",
    answer:
      "Yes. SYS + SYSX (SPT) + SYS (NEVM) = Total Circulating Supply. This supply is maintained via mint/burn as tokens move across the bridge in either direction.",
  },
  {
    question:
      "What counterparty or custodian related risks and/or limitations do I incur when using Syscoin Bridge?",
    answer:
      "None. You maintain full possession and control of your funds at all times. Furthermore, market demand (such as with atomic swap) is not required to take advantage of Syscoin Bridge. These benefits are made possible by first-class integration with the NEVM layer through a custom opcode (sysblockhash and utilizing dual smart contracts and SPV proofs on both sides.",
  },
  {
    question: "Are balances and coins tracked when moving across the bridge?",
    answer:
      "No. This is a zero-knowledge mechanism. They are pooled, and fungible one from another.",
  },
  {
    question: "Can I have SYSX in my Syscoin wallet?",
    answer:
      "SYSX is an SPT. You can use Pali which is integrated into this site. Syscoin QT can also be used if you are competent with command line interface.",
  },
  {
    question:
      "Do I need gas to execute the smart contract, and if so how much?",
    answer:
      "You will need SYS gas on the NEVM to cover the costs of executing NEVM smart contracts. These costs will vary depending on the NEVM network.",
  },
  {
    question: "Do I need SYS to execute SPT transactions, and if so how much?",
    answer:
      "SYS is required to execute any transaction within the Syscoin network, including SPT transfers. Exact transaction costs depend on network conditions. Syscoin transaction fees are relatively inexpensive, especially in the case of SPTs which utilize Syscoin’s ZDAG protocol. Typically, thousands of SPT transfers can be funded with a single SYS, due to the unique fee market of the ZDAG network within which users usually do not require having PoW confirmation within an immediate block.",
  },
  {
    question: "Why have an SPT on Syscoin if I can have an ERC20 token?",
    answer: (
      <Typography>
        Because this delivers multiple advantages. SPTs use a UTXO storage model
        and so it is more efficient to do simple transfers and aswell leverage
        the innovations from the Bitcoin script system. SPTs are also ZDAG
        enabled, which means they benefit from high-speed and high-throughput
        token transfers with low fees. ZDAG’s probabilistic security (offering
        global consensus in ten seconds or less) enables you to determine the
        security/speed trade-off most ideal for your particular use case.
        Further, each SPT transaction settles onchain with Bitcoin compliant
        proof of work. All of this is especially attractive for point of sale
        applications. You can learn more about Syscoin ZDAG here:
        <Link target="_blank" href="https://syscoin.org/z-dag">
          https://syscoin.org/z-dag
        </Link>
        . The overall vision is to offer both UTXO and account based (ERC)
        representations of tokens which leverage future innovations from the
        Bitcoin and Ethereum ecosystems respectively. Users can choose which
        model they wish to hold their tokens in trustlessly.
      </Typography>
    ),
  },
  {
    question: "Can other ERC20 tokens be migrated to the Syscoin chain?",
    answer: (
      <Typography>
        Yes by burning and minting via the bridge, resulting in an SPT. This is
        currently active for SYSX. A reference implementation of the smart
        contracts necessary to enable your particular ERC20 with Syscoin Bridge
        is available here:{" "}
        <Link
          target="_blank"
          href="https://github.com/syscoin/sysethereum-contracts"
        >
          https://github.com/syscoin/sysethereum-contracts
        </Link>
      </Typography>
    ),
  },
  {
    question: "How is this initiative different from others?",
    answer: (
      <Typography>
        Syscoin Bridge is the first two-way interoperability solution without
        counterparties, a permissionless and trustless solution that leverages
        the security of each respective blockchain. This allows us to consider
        the SPT supply mechanism as a fractional supply across multiple
        blockchains. Users on Syscoin by extension will be able to leverage the
        vast toolset of Ethereum whilst NEVM users can leverage Syscoin’s cost
        effective and efficient asset specific transactionality. You can read
        more about the technicals here:
        <Link
          target="_blank"
          href="https://github.com/syscoin/sysethereum-docs"
        >
          https://github.com/syscoin/sysethereum-docs
        </Link>
      </Typography>
    ),
  },
];
const FAQ: React.FC = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" textAlign="center" sx={{ mb: 3 }} id="faq">
        FAQ
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls={`faq${index}-header`}
            id={`faq${index}-header`}
          >
            <Typography color="primary">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>{faq.answer}</AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQ;

import { Flex, Textarea } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { useState } from "react";
import { SideBar } from "../components/SideBar";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [content, setContent] = useState("");

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" direction={["column", "column", "column", "row"]}>
        <SideBar />

        <Flex bg="#343a40" h="100vh" p="2rem" flex="1" color="#f5f5f5">
          <Textarea
            h="100%"
            color="#f5f5f5"
            borderColor="#000000"
            _active={{ border: "#000000" }}
            _focus={{ border: "#000000" }}
            minH="400px"
            minW={["none", "none", "400px"]}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Flex>

        <Flex bg="#f5f5f5" h="100%" p="2rem" flex="1" direction="column">
          <ReactMarkdown
            children={content}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={dracula as any}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

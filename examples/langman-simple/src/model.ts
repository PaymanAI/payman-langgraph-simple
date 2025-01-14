import { createTaskTool } from "./tools";
import { ChatOpenAI } from "@langchain/openai";

const tools = [createTaskTool];

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export const model = new ChatOpenAI({
  model: "gpt-4o",
  openAIApiKey: OPENAI_API_KEY,
  temperature: 0.7,
}).bindTools(tools);

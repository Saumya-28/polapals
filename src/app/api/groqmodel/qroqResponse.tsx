 export interface ChatMessage {
    role: 'assistant' | 'user' | 'system';
    content: string;
}

// Define the structure for each choice
export interface Choice {
    index: number;
    message: ChatMessage;
    logprobs: null;
    finish_reason: string;
}

// Main interface for the chat completion response
export interface ChatCompletion {
    id: string;
    model: string;
    content: string;
    choices: Choice[];
}
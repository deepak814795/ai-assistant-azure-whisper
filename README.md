# Audify (Azure Whisper AI + GPT 4.0 Voice Assistant )

### Live Link - [https://audify-ai-deepak-kushwaha.onrender.com/](https://audify-ai-deepak-kushwaha.onrender.com/)

***Note*** : ***The application might crash due to 10 seconds runtime limit on server actions on API call on free plan, in case of crash just refresh the page.***

***Note*** : ***Try to speak lound and clear in a surrounding with low noise or else your actual response might vary.***

## Overview:
This project integrates Microsoft Azure, OpenAI's GPT-4.0 model, and Whisper AI for automatic speech recognition (ASR) and text generation tasks. The system accepts audio input from users, processes it through Whisper AI for transcription into text format, utilizes GPT-4.0 for generating responses based on the transcribed text, and finally converts the response back into audio format using Whisper AI Model.

#### Whisper is an automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data collected from the web.


## Workflow :
**Input**: Users provide audio input to the system. This can be in various formats supported by Whisper AI.

 **Processing**: Whisper AI processes the audio input, breaking it down into smaller chunks and transcribing them into text format.

- **Speech-to-Text Conversion**: Whisper AI is employed to convert user-provided audio input into text format. This involves breaking down the audio into chunks and transcribing them into textual representations.

- **Text Generation**: The transcribed text is passed through OpenAI's GPT-4.0 model for generating responses based on the input. GPT-4.0 utilizes advanced natural language processing techniques to provide coherent and contextually relevant responses.

- **Text-to-Speech Conversion**: The generated text response is converted back into audio format using Whisper AI. This ensures that the system provides output to users in the form of natural-sounding speech.

- **Output**:  Users receive the response in the form of natural-sounding speech.

![Screenshot (1079)](https://github.com/deepak814795/ai-assistant-azure-whisper/assets/91387970/093aa6b0-335f-4ba6-8524-e2eac9639e02)

***[https://openai.com/research/whisper](https://openai.com/research/whisper)***


## Why use Azure OpenAI services instead of the Whisper API key?

## Answer:
Azure OpenAI services offer several advantages over the Whisper API key. Firstly, Azure OpenAI services provide faster processing speeds for text processing tasks. With Azure, the system can process up to 3 audio messages per minute, allowing for quicker turnaround times in converting audio to text and generating responses.

Additionally, Azure offers scalability through its cloud services infrastructure. This scalability ensures that the system can handle increasing workloads and adapt to changing demands without compromising performance. By leveraging Azure's cloud services, the application can efficiently scale resources as needed, optimizing resource utilization and maintaining high levels of performance and reliability.


## Setup

### Installation

To get started with this project 
Clone the repository and navigate to the project directory in your terminal. Then, install the dependencies using npm:

```bash
npm install
```


```bash
// example env file

AZURE_API_KEY=

AZURE_ENDPOINT=

AZURE_DEPLOYMENT_NAME= // name of whisper ai model

AZURE_DEPLOYMENT_COMPLETIONS_NAME= // name of gpt 4.0 model

```
```
npm run dev
```

## Contributing:
Contributions to this project are welcome! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request. Be sure to follow the project's coding standards and guidelines.

## License:
This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code as per the terms outlined in the license.

## Acknowledgements:
- Microsoft Azure for providing cloud services and resources.
- OpenAI for their GPT-4.0 model and advancements in natural language processing.
- Whisper AI for its automatic speech recognition and text-to-speech capabilities.

## Disclaimer:
This project is provided as-is, without any warranties or guarantees. Use at your own risk. The project contributors are not liable for any damages or issues arising from the use of this software.

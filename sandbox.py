from gpt4all import GPT4All

# Specify the correct path to the downloaded model
model_path = "C:\\Users\\juan.cruz.aldaya\\AppData\Local\\nomic.ai\\GPT4All\\Meta-Llama-3-8B-Instruct.Q4_0.gguf"

# Load the model
model = GPT4All(model_path)

# Function to generate a response based on a prompt
def generate_response(prompt):
    response = model.generate(prompt)
    return response

# Example usage
prompt = "can you resume this for me? 'C:\\Users\\juan.cruz.aldaya\\OneDrive - Accenture\\Desktop\\CasosDU.pdf'"
response = generate_response(prompt)
print(response)

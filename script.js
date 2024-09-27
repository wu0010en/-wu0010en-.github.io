import matplotlib.pyplot as plt

# Data
types = ['Type 1', 'Type 2', 'Type 3']
claude_identification = [92.5, 86.3, 97.5]
claude_translation = [0.1497, 0.1479, 0.1859]
chatgpt_identification = [90.63, 90.63, 95.6]
chatgpt_translation = [0.1449, 0.1632, 0.1758]

# Create the plot
fig, ax1 = plt.subplots(figsize=(10, 6))

# Plot Identification data on the left y-axis
ax1.set_xlabel('Types')
ax1.set_ylabel('Identification (%)', color='#DDA0DD')
ax1.plot(types, claude_identification, color='#DDA0DD', marker='o', label='Claude 3.5 Identification')
ax1.plot(types, chatgpt_identification, color='#F4A460', marker='s', label='ChatGPT4o Identification')
ax1.tick_params(axis='y', labelcolor='#DDA0DD')
ax1.set_ylim(65, 100)  # Set y-axis limit for identification

# Create a second y-axis for Translation data
ax2 = ax1.twinx()
ax2.set_ylabel('Translation', color='#6A5ACD')
ax2.plot(types, claude_translation, color='#6A5ACD', marker='o', label='Claude 3.5 Translation')
ax2.plot(types, chatgpt_translation, color='#FF7F24', marker='s', label='ChatGPT4o Translation')
ax2.tick_params(axis='y', labelcolor='#6A5ACD')
ax2.set_ylim(0.13, 0.2)  # Set y-axis limit for translation

# Add legend
lines1, labels1 = ax1.get_legend_handles_labels()
lines2, labels2 = ax2.get_legend_handles_labels()
ax1.legend(lines1 + lines2, labels1 + labels2, loc='upper left')

plt.title('Identification vs Translation: Claude 3.5 and ChatGPT4o')
plt.tight_layout()
plt.show()
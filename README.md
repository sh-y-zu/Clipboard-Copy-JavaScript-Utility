# Clipboard Copy JavaScript Utility

This JavaScript utility allows you to copy specific text content to the clipboard from a web page. It includes a simple function `textToClipboard` and an example usage for copying group names and numbers.

## Usage

1. Include the `clipboard-copy.js` script in your HTML file:

    ```html
    <script src="clipboard-copy.js"></script>
    ```

2. Add the required HTML elements to your page:

    ```html
    <!-- Sample elements for demonstration purposes -->
    <div class="_3W2ap">Group Name</div>
    <div class="copyable-text">123456</div>
    ```

3. Call the `textToClipboard` function with your desired data:

    ```html
    <script>
    var numbers = document.getElementsByClassName("copyable-text")[1].innerHTML;
    var grpname = document.getElementsByClassName("_3W2ap")[0].innerText;
    var x = '<h3>';
    var y = '</h3>';
    var data = x + grpname + y + numbers;
    textToClipboard(data);
    </script>
    ```

4. Open your HTML file in a browser and test the clipboard copy functionality.

## Function Explanation

The `textToClipboard` function performs the following steps:

1. Creates a hidden textarea element.
2. Appends the textarea to the document body.
3. Sets the value of the textarea to the provided text.
4. Selects the text in the textarea.
5. Executes the copy command to copy the selected text to the clipboard.
6. Removes the textarea from the document body.
7. Displays an "Copy Done" alert.

## Contributing

Feel free to contribute to the development of this utility. If you have suggestions, bug reports, or improvements, please open an issue or submit a pull request.

## Fun Fact

Did you know that you can use this JavaScript utility along with browser inspect on WhatsApp Web to copy the numbers of group members? 🕵️‍♂️💼

**Disclaimer:** Always respect privacy and adhere to ethical guidelines. Use this utility responsibly and ensure that you have the necessary permissions before copying any information.

Enjoy exploring the possibilities and happy coding! 😄

## Connect with me

Feel free to connect with me on GitHub or other platforms:

- GitHub: [sh-y-zu](https://github.com/sh-y-zu)

## License

This project is licensed under the [MIT License](https://github.com/sh-y-zu/Clipboard-Copy-JavaScript-Utility/blob/main/LICENSE).




# Chat Screen Application

## Introduction
This project is a React Native application that replicates a chat screen UI for both Android and iOS devices. The application fetches chat data from a remote API and displays it in an infinite scrollable chat interface.

## Features
- **Hybrid Application:** Works on both Android and iOS.
- **Real-time Chat Display:** Fetches and displays the most recent chats on load.
- **Infinite Scrolling:** Automatically loads older messages when scrolling up.
- **Responsive Design:** Adapts to various screen sizes.

## Technologies Used
- React Native
- Expo (for easy development and testing)
- Axios (for API requests)
- React Navigation (if applicable for navigation)

## API Reference
Data is retrieved from the following API:
```
https://qa.corider.in/assignment/chat?page=0
```
This endpoint provides paginated chat data. The `page` parameter is incremented to fetch older messages when the user scrolls up.

## Installation and Setup
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Pran2535/assignmentchat.git
   cd assignmentchat
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Application:**
   ```bash
   npm start
   # or
   yarn start
   ```
   Follow the on-screen instructions to launch the application on an Android or iOS emulator/device.

## Screenshots
*Attached are screenshots showcasing the chat screen interface.*

## Screen Recording
A screen recording of the application running on a device is included in the repository.

## How It Works
1. On application load, the latest chat messages are fetched from the API.
2. As the user scrolls upward, the application fetches older messages by incrementing the `page` parameter.
3. Messages are displayed in the chat screen with a clean and responsive design.




## License
This project is licensed under the MIT License.

## Contact
For any questions or issues, please contact me through [GitHub Issues](https://github.com/Pran2535/assignmentchat/issues).

Happy Coding! 🚀
here is the live demo android working available 

https://github.com/user-attachments/assets/995b811e-1243-466e-9adc-20f46e16a89c



https://github.com/user-attachments/assets/0e450003-1af8-4771-86e8-e80b891b29f1



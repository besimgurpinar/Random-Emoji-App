
    const button = document.querySelector('button');
    const emoji = document.querySelector('.emoji');
    
    const emojis = [
      '😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋',
      '😎', '😍', '😘', '😗', '😙', '😚', '🙂', '🤗', '🤔', '🤐', '🤨',
      '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪',
      '🤤', '😴', '💤', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😵', '🤯',
      '🤠', '😎', '😇', '🤡', '👻', '💩'
    ];
    
    button.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      emoji.textContent = emojis[randomIndex];
    });
  
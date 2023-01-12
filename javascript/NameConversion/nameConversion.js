document.getElementById('convert-btn').addEventListener('click', function() {
    var text = document.getElementById('text').value;
    var camelCase = toCamelCase(text);
    var pascalCase = toPascalCase(text);
    var snakeCase = toSnakeCase(text);
    var screamingSnakeCase = toScreamingSnakeCase(text);
    var kebabCase = toKebabCase(text);
    var screamingKebabCase = toScreamingKebabCase(text);
  
    document.getElementById('camel-case').textContent = camelCase;
    document.getElementById('pascal-case').textContent = pascalCase;
    document.getElementById('snake-case').textContent = snakeCase;
    document.getElementById('screaming-snake-case').textContent = screamingSnakeCase;
    document.getElementById('kebab-case').textContent = kebabCase;
    document.getElementById('screaming-kebab-case').textContent = screamingKebabCase;
  });
  
  function toCamelCase(text) {
    var words = text.split(' ');
    for (var i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join('');
  }
  
  function toPascalCase(text) {
    var words = text.split(' ');
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join('');
  }
  
  function toSnakeCase(text) {
    return text.split(' ').join('_');
  }
  
  function toScreamingSnakeCase(text) {
    return text.toUpperCase().split(' ').join('_');
  }
  
  function toKebabCase(text) {
    return text.split(' ').join('-');
  }
  
  function toScreamingKebabCase(text) {
    return text.toUpperCase().split(' ').join('-');
  }
  
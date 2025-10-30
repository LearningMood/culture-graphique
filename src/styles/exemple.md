// ============================================
// EXEMPLES D'UTILISATION
// ============================================

// Les espacements
// Avec la fonction space()
.card {
  padding: space(6);
  margin-bottom: space(8);
  
  @include mq-min(md) {
    padding: space(8);
  }
}


<!-- AVEC STACK (empilement) -->
<div class="article-content">
  <h2>Titre</h2>       <!-- Pas de margin-top -->
  <p>Paragraphe 1</p>  <!-- margin-top: 1rem -->
  <p>Paragraphe 2</p>  <!-- margin-top: 1rem -->
  <img src="...">      <!-- margin-top: 1rem -->
</div>

.article-content {
  @include stack(4); // 1rem d'espacement entre chaque élément
}

// Résultat compilé :
.article-content > * + * {
  margin-top: 1rem;
}
// Avec les mixins
.article-content {
  @include stack(6); // Espacement vertical entre éléments enfants
}


<!-- Flex-gap = espacement horizontal -->
<div class="button-group">
  <button>Annuler</button>
  <button>Valider</button>
  <button>Supprimer</button>
</div>
.button-group {
  @include inline(4); // 1rem d'espacement entre boutons
}

// Résultat compilé :
.button-group {
  display: flex;
  gap: 1rem;
}

<!-- SECTION-SPACING -->
.hero-section {
  @include section-spacing; // Espacement responsive automatique
}

Exemple concret :
<!-- html -->
<section class="hero">
  <h1>Mon titre</h1>
</section>

<section class="features">
  <div>Feature 1</div>
</section>
<!-- scss -->
.hero {
  @include section-spacing;
  background: blue;
}

.features {
  @include section-spacing;
  background: white;
}

<!--  Résultat compilé : -->
.hero {
  padding-block: 3rem;
}

@media (min-width: 768px) {
  .hero {
    padding-block: 4rem;
  }
}

@media (min-width: 1024px) {
  .hero {
    padding-block: 6rem;
  }
}
```

**Rendu visuel :**
```
┌─────────────────────┐
│  [48px padding]     │ ← Mobile
│  <h1>Mon titre</h1> │
│  [48px padding]     │
└─────────────────────┘

┌─────────────────────┐
│  [64px padding]     │ ← Tablette
│  <h1>Mon titre</h1> │
│  [64px padding]     │
└─────────────────────┘

┌─────────────────────┐
│  [96px padding]     │ ← Desktop
│  <h1>Mon titre</h1> │
│  [96px padding]     │
└─────────────────────┘



// Avec les variables sémantiques
.modal {
  padding: $space-lg;
  gap: $space-md;
}

// Containers


// Dans n'importe quel .scss ou <style lang="scss">
.ma-classe {
  @include container(maxi);
  
  @include mq-min(md) {
    padding: 2rem;
  }
}

/*
// Dans vos fichiers SCSS :

// Utiliser les mixins de media queries
.mon-element {
  font-size: 14px;
  
  @include mq-min(md) {
    font-size: 16px;
  }
  
  @include mq-min(lg) {
    font-size: 18px;
  }
}

// Desktop-first
.header {
  padding: 2rem;
  
  @include mq-max(md) {
    padding: 1rem;
  }
}

// Entre deux breakpoints
.sidebar {
  @include mq-between(md, lg) {
    width: 250px;
  }
}

// Créer un container custom
.ma-section {
  @include container(maxi);
  background: white;
}

// Utiliser directement les classes HTML
<div class="container">
  Contenu standard
</div>

<div class="container--mini">
  Contenu étroit
</div>

<div class="container--maxi">
  Contenu large
</div>

<div class="container--full">
  Contenu pleine largeur
</div>
*/

<!-- CAROUSEL -->
<!-- ============================================
     EXEMPLES D'UTILISATION
     ============================================ -->

<!--
## Usage basique
<Carousel folder="couleur/contraste" />

## Avec options
<Carousel 
  folder="couleur/harmonies"
  cols={20}
  ratio="4/3"
  fit="contain"
  showCounter={true}
  showCaptions={true}
/>

## Différents ratios
<Carousel folder="photos/portraits" ratio="3/4" />      <!-- Portrait -->
<Carousel folder="photos/paysages" ratio="21/9" />     <!-- Cinéma -->
<Carousel folder="photos/carres" ratio="1/1" />        <!-- Carré -->

## Fit options
<Carousel folder="logos" fit="contain" />               <!-- Letterbox -->
<Carousel folder="photos" fit="cover" />                <!-- Crop -->
-->
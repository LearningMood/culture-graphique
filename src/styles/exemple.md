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
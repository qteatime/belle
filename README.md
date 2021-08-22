# Belle

Can programming be seen as literary art?

Belle is a small experiment in this space,
A tiny push towards programming's own Belles Lettres.
Fiddle with the aesthetics of prose and poetry,
And give it meaning through rewite rules.

## Building

Assuming you have Node.js and npm installed:

    $ npm install
    $ npm start

Then point your browser to http://localhost:8000. Example programs and
documentation are embedded in the small IDE.

---

Alternatively, if you don't have Node.js and npm installed, you
can start any web-browser in the `docs/` folder:

    $ cd docs
    $ python3 -m http.server   # note that this http server is really slow

You can also run it directly from the web: https://qteati.me/belle

## Concept and etymology

Belle (/bɛl/), is "beautiful" in French, and in this context is
used in the original idea of Belles Lettres---a category of writing
concerned with the aesthetics of writing.

Here we're concerned with the aesthetics of programming, and the
idea of "programs as works of literary art". Even if it comes at
the cost of being functional or practical at all.

Indeed, all programs in Belle have **no semantics**. At least not
out of the box. A program is just an arbitrary collection of text
pieces. These text pieces _may_ be given meaning through rewrite
rules.

E.g.: a quine program is a program that outputs itself. In Belle
we would first write the program:

```
Echo,
Down the hall,
I wonder,
What shall befall...
```

That's a valid Belle program. It doesn't do anything because there's
no idea of meaning here. So we need to put some rewrite rules before
the program:

```
:rule <any>/0 = @display ^self.

Echo,
Down the hall,
I wonder,
What shall befall...
```

This rule basically means: "for any piece of text, give it meaning
by displaying it". Rewrite rules are applied at the beginning of
the program, replacing the content it matched with its body, until
no program input remains.

## Licence

Copyright (c) 2021 Q.
Released under the permissive MIT licence.

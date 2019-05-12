var set = new Set();

set.add({ id: 1 });
set.add({ id: 2 });
set.add({ id: 3 });

var d = { id: 4 };

set.add(d);
set.add(d);

for (const item of set) {
    console.log(item);
}
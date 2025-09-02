// Description:

// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// let helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4)
// helper.pageCount() // should == 2
// helper.itemCount() // should == 6
// helper.pageItemCount(0) // should == 4
// helper.pageItemCount(1) // last page - should == 2
// helper.pageItemCount(2) // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5) // should == 1 (zero based index)
// helper.pageIndex(2) // should == 0
// helper.pageIndex(20) // should == -1
// helper.pageIndex(-10) // should == -1

export class PaginationHelper {
  private collection: any[];
  private itemsPerPage: number;
  private pageItem: { [page: number]: string[] } = {};

  constructor(collection: any[], itemsPerPage: number) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;

    let currentPage = 0;

    for (let i = 0; i < this.pageCount(); i++) {
      this.pageItem[i] = collection.slice(
        currentPage,
        currentPage + itemsPerPage
      );
      currentPage += itemsPerPage;
    }
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    // returns the number of pages
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }

  pageItemCount(pageIndex: number): number {
    if (pageIndex < Object.keys(this.pageItem).length && pageIndex > -1)
      return this.pageItem[pageIndex].length;

    return -1;
  }

  pageIndex(itemIndex: number): number {
    if (
      itemIndex < 0 ||
      itemIndex > this.collection.length - 1 ||
      this.collection.length <= 0
    )
      return -1;

    let currentPage = 0;
    let itemPerPageIncrement = this.itemsPerPage;

    while (!(itemIndex < itemPerPageIncrement)) {
      currentPage++;
      itemPerPageIncrement += this.itemsPerPage;
    }

    return currentPage;
  }
}

const item1 = ["a", "b", "c", "d", "e", "f"];
const numberOfPage = 4;

// const helper = new PaginationHelper(item1, numberOfPage);

// console.log(helper.pageCount());
// console.log(helper.itemCount());
// console.log(helper.pageItemCount(0));
// console.log(helper.pageItemCount(1));
// console.log(helper.pageItemCount(2));

// console.log("--------------------------");
// console.log();

// console.log(helper.pageIndex(5));
// console.log(helper.pageIndex(2));
// console.log(helper.pageIndex(20));
// console.log(helper.pageIndex(-10));

// console.log("--------------------------");
// console.log();

const helper1 = new PaginationHelper(Array(21).fill("x"), 27);

console.log(helper1.pageIndex(21));
// console.log(helper1.pageIndex(1));

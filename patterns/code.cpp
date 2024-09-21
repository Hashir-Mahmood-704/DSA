#include <iostream>
using namespace std;

// pattern 1
void pattern1() {
    int n = 0;
    cout << "Enter value for n: ";
    cin >> n;
    for (int row = 0; row < n; row++) {
        for (int col = 0; col < n; col++) {
            cout << "* ";
        }
        cout << "\n";
    }
}

// pattern 2
void pattern2() {
    int n = 0;
    cout << "Enter value for n: ";
    cin >> n;
    for (int row = 0; row < n; row++) {
        for (int col = 0; col < n; col++) {
            cout << row + 1 << " ";
        }
        cout << "\n";
    }
}

// pattern 3
void pattern3() {
    int n = 0;
    cout << "Enter value for n: ";
    cin >> n;
    for (int row = 0; row < n; row++) {
        for (int col = 0; col < n; col++) {
            cout << col + 1 << " ";
        }
        cout << "\n";
    }
}

// pattern 4
void pattern4() {
    int n = 0;
    cout << "Enter value for n: ";
    cin >> n;
    for (int row = 0; row < n; row++) {
        for (int col = 0; col < n; col++) {
            cout << n - col << " ";
        }
        cout << "\n";
    }
}

// pattern 5
void pattern5() {
    int n = 0, count = 1;
    cout << "Enter value for n: ";
    cin >> n;
    for (int row = 0; row < n; row++) {
        for (int col = 0; col < n; col++) {
            cout << count << " ";
            count++;
        }
        cout << "\n";
    }
}

// pattern 6
void pattern6() {
    int n = 0;
    cout << "Enter value for n: ";
    cin >> n;
    for (int row = 0; row < n; row++) {
        for (int col = 0; col <= row; col++) {
            cout << "* ";
        }
        cout << "\n";
    }
}

// pattern 7
void pattern7() {
    int n = 0;
    cout << "Enter value for n: ";
    cin >> n;
    for (int row = 0; row < n; row++) {
        for (int col = 0; col <= row; col++) {
            cout << row + 1 << " ";
        }
        cout << "\n";
    }
}

// pattern 8
void pattern8() {
    int n = 0, count = 1;
    cout << "Enter value for n: ";
    cin >> n;
    for (int row = 0; row < n; row++) {
        for (int col = 0; col <= row; col++) {
            cout << count << " ";
            count++;
        }
        cout << "\n";
    }
}

// pattern 9
void pattern9() {
    int n = 0, count = 0;
    cout << "Enter value for n: ";
    cin >> n;
    for (int row = 0; row < n; row++) {
        count = row + 1;
        for (int col = 0; col <= row; col++) {
            cout << count << " ";
            count++;
        }
        cout << "\n";
    }
}

int main() {
    // pattern1();
    // pattern2();
    // pattern3();
    // pattern4();
    // pattern5();
    // pattern6();
    // pattern7();
    // pattern8();
    pattern9();
    return 0;
}
class Transcriptor {
    toRna(words: string): string {
        const map = new Map();
        map.set('A', 'U');
        map.set('C', 'G');
        map.set('G', 'C');
        map.set('T', 'A');

        const result = words.split('').map((word) => map.get(word)).join('');

        if (!result || result.length !== words.length) {
            throw new Error('Invalid input DNA.')
        }

        return result;
    }
}

export default Transcriptor
